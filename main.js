const toggleBtn = document.getElementById('toggleBtn');
const hiddenRows = document.querySelectorAll('.hidden-news');
const btnText = document.getElementById('btnText');

toggleBtn.addEventListener('click', function () {
    const isHidden = hiddenRows[0].style.display === 'none' || hiddenRows[0].style.display === '';

    hiddenRows.forEach(row => {
        row.style.display = isHidden ? 'table-row' : 'none';
    });

    btnText.textContent = isHidden ? 'See Less' : 'See More';
    toggleBtn.classList.toggle('active');
});