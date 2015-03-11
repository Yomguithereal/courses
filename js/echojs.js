var b = document.querySelector('#sol-browser ~ div.highlight'),
    n = document.querySelector('#sol-node ~ div.highlight');

b.style.display = 'none';
n.style.display = 'none';

function browserSolution() {
  b.style.display = 'block';
}

function nodeSolution() {
  n.style.display = 'block';
}
