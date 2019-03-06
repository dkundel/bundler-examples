import { formatDistance, parseISO } from 'date-fns';

const dateInputElement = document.getElementById(
  'date-input'
) as HTMLInputElement;
const outputElement = document.getElementById('output') as HTMLSpanElement;
const buttonElement = document.getElementById(
  'action-button'
) as HTMLButtonElement;

function determineDateDistance() {
  if (!dateInputElement || !outputElement) {
    return;
  }
  const dateValue = dateInputElement.value;
  const parsedDate = parseISO(dateValue);
  const outputDistance = formatDistance(parsedDate, new Date(), {
    addSuffix: true,
  });
  outputElement.innerText = outputDistance;
}

buttonElement.addEventListener('click', determineDateDistance);
