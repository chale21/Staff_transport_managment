document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("fa-barsid");
    const leftList = document.getElementById("navlistleftid");
    const rightList = document.getElementById("rightnavlistid");

    hamburger.addEventListener("click", function () {
        leftList.classList.toggle("nav-active");
        rightList.classList.toggle("nav-active");
    });
});

const searchInput = document.querySelector('.search1');
const searchBtn = document.querySelector('.svg2'); // now clickable image
const productItems = document.querySelectorAll('.find');

function searchProducts() {
  const query = searchInput.value.toLowerCase();
  productItems.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none";
  });
}

searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', searchProducts);

// document.addEventListener("DOMContentLoaded", function () {
//     const drop1 = document.querySelector(".drop1");
//     const dropdown = drop1.querySelector(".dropdownlist");

//     drop1.addEventListener("click", function(e) {
//         // prevent clicking links from toggling
//         if (e.target.classList.contains("droplists")) return;

//         dropdown.classList.toggle("dropdown-open");
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener("click", function(e) {
//         if (!drop1.contains(e.target)) {
//             dropdown.classList.remove("dropdown-open");
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {

    // Function to activate dropdowns dynamically
    function activateDropdown(dropClass, listClass) {
        const drop = document.querySelector(dropClass);
        const dropdown = drop.querySelector(listClass);

        drop.addEventListener("click", function(e) {
            // Avoid toggling when clicking links
            if (e.target.classList.contains("droplists") ||
                e.target.classList.contains("droplists2")) return;

            dropdown.classList.toggle("dropdown-open");
        });

        // Close when clicking outside
        document.addEventListener("click", function(e) {
            if (!drop.contains(e.target)) {
                dropdown.classList.remove("dropdown-open");
            }
        });
    }

    // Activate both dropdowns
    activateDropdown(".drop1", ".dropdownlist");
    activateDropdown(".drop2", ".dropdownlist2");
});





