#!/bin/bash
# Walks through the calculator from the current step until the result appears.
# Uses agent-browser's role/text-based locators which are more stable than refs.

# Pick the first radio option in the visible radiogroup
pick_radio() {
  # Click the second radio button (first one is in another group often)
  agent-browser find role radio click 2>/dev/null
  # Wait a beat for state to settle
  sleep 0.5
}

# Open the dropdown and pick the first option
pick_select() {
  agent-browser find role combobox click 2>/dev/null
  sleep 0.5
  # Click first option
  agent-browser find role option click 2>/dev/null
  sleep 0.5
}

# Move to next step
next_step() {
  agent-browser find role button click --name "Next step" 2>/dev/null || \
    agent-browser find role button click --name "See my result" 2>/dev/null
  sleep 1
}

for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  SNAP=$(agent-browser snapshot -i 2>&1)
  echo "--- Step $i ---"
  if echo "$SNAP" | grep -q "result-card\|Your camel score\|Your answers"; then
    echo "RESULT shown - stopping"
    break
  fi
  if echo "$SNAP" | grep -q "radiogroup"; then
    echo "  radio group - picking first option"
    pick_radio
  elif echo "$SNAP" | grep -q "combobox"; then
    echo "  dropdown - picking first option"
    pick_select
  elif echo "$SNAP" | grep -q "See my result"; then
    echo "  final step - clicking See my result"
    next_step
    break
  else
    echo "  no recognizable field, just pressing next"
  fi
  next_step
done

echo "=== Final state ==="
agent-browser snapshot -i 2>&1 | head -25
