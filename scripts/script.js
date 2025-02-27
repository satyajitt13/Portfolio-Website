const dropdown = document.querySelector(".dropdownContainer");
const dropdownItem = document.querySelector(".dropdownItem");



dropdown.addEventListener('click', () => {
    let hidden = true;
    if (hidden ) {
        dropdown.style.display = "block"
        dropdownItem.style.display = "block"
        hidden = false
    }else{
        dropdownItem.style.display = "none"  
    }
})