document.getElementById('addBtn').addEventListener('click', function() {
    const input = document.getElementById('bar');
    const task = input.value.trim();

    if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task + " ";

        const x = document.createElement('button');
        x.innerText = "X";
        x.className = "delete-btn";

        // Add delete functionality
        x.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(x);
        document.getElementById('Task-List').appendChild(li);

        input.value = '';
    }
});
