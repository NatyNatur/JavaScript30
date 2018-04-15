const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this.value);
  const mUnit = this.dataset.sizing || '';
  console.log(mUnit);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + mUnit);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
