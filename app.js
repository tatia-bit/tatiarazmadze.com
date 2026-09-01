// Components ship open in the markup, so a visitor with no JavaScript gets a
// complete document instead of a row of empty boxes. Collapsing is the
// enhancement, not the baseline.
document.querySelectorAll('.board details[open]').forEach(function (d) {
  d.open = false;
});
