$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(".left").toggle();
    });
    $("#toggleButton").click(function() {
        $("#myBlock").show(); // Toggles display block/none
        
    });

    // Close the details section and show the mid chat again
    $(".close-detail").click(function() {
        $("#myBlock").hide(); // Hides the details panel
        $(".mid").show(); // Show the chat again
    });

    // Open chat when clicking on a person
    $(".person-show").on('click', function() {
        $(".mid").show(); // Show the chat section
        $(".left-c").hide(); // Hide the left section
    });

    // Close the chat section and show the left section again
    $(".close-chat").on('click', function() {
        $(".mid").hide(); // Hide the chat
        $(".left-c").show(); // Show the left section again
    });
    // Toggle dropdown and rotate icon
    $('.chevron-icon').on('click', function (event) {
        event.preventDefault(); // Prevent the link from being followed
        const target = $($(this).data('target'));
        const isTargetOpen = target.hasClass('show');
        
        // Close all other dropdowns and reset icons
        $('.mydropdown').removeClass('show').each(function () {
            const otherIcon = $('.chevron-icon[data-target="#' + this.id + '"]');
            otherIcon.removeClass('rotate');
        });
        
        // Toggle the current dropdown and icon
        if (!isTargetOpen) {
            target.addClass('show');
            $(this).addClass('rotate');
        }
    });

    // Initialize FullCalendar
   



document.querySelector('.dropdown-toggle1').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu1');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
    const isClickInside = document.querySelector('.dropdown1').contains(event.target);
    if (!isClickInside) {
        document.querySelector('.dropdown-menu1').style.display = 'none';
    }
});

// Sample customer data
const customers = [
    { name: 'Customer', img: '../img/user.png' },
    { name: 'Customer name here', img: '../img/user.png' },
    { name: 'Customer name here', img: '../img/user.png' },
    { name: 'Customer name here', img: '../img/user.png' },
    { name: 'Customer name here', img: '../img/user.png' },
];

const customerList = document.querySelector('.customer-list');
const dropdownToggle = document.querySelector('.dropdown-toggle2');

customers.forEach(customer => {
    const li = document.createElement('li');
    li.className = 'customer-list-item';
    li.innerHTML = `<img src="${customer.img}" alt="Customer image">${customer.name}`;
    li.addEventListener('click', function () {
        dropdownToggle.textContent = customer.name; // Update the dropdown button text
        document.querySelector('.dropdown-menu1').style.display = 'none'; // Close the dropdown menu
    });
    customerList.appendChild(li);
});

document.querySelector('.custom-dropdown-toggle').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.custom-dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
    const isClickInside = document.querySelector('.custom-dropdown').contains(event.target);
    if (!isClickInside) {
        document.querySelector('.custom-dropdown-menu').style.display = 'none';
    }
});

// Sample customer data
const customers1 = [
    { title: 'Free Assessment', description: 'Our experts will come to assess your needs and discuss solutions.' },
    { title: 'Free Assessment', description: 'Our experts will come to assess your needs and discuss solutions.' },
    { title: 'Free Assessment', description: 'Our experts will come to assess your needs and discuss solutions.' },
    { title: 'Free Assessment', description: 'Our experts will come to assess your needs and discuss solutions.' },
    { title: 'Free Assessment', description: 'Our experts will come to assess your needs and discuss solutions.' },
    { title: 'Free Assessment', description: 'Our experts will come to assess your needs and discuss solutions.' },
];

const customerList1 = document.querySelector('.custom-customer-list');
const dropdownToggle1 = document.querySelector('.custom-toggle-button');

customers1.forEach(customer => {
    const li = document.createElement('li');
    li.className = 'custom-customer-list-item d-flex flex-column align-items-start';

    // Using h6 for the title and p for the description
    li.innerHTML = `<h6 class="mb-0">${customer.title}</h6><p class="mb-0 font-12">${customer.description}</p>`;

    li.addEventListener('click', function () {
        dropdownToggle1.textContent = customer.title; // Update the dropdown button text with the customer title
        document.querySelector('.custom-dropdown-menu').style.display = 'none'; // Close the dropdown menu
    });

    customerList1.appendChild(li);
});



const lineItemsContainer = document.getElementById('lineItemsContainer');
const addLineItemButton = document.getElementById('addLineItem');

// Function to create a new line item element
function createLineItem() {
    const lineItem = document.createElement('div');
    lineItem.className = 'line-item';
    lineItem.innerHTML = `
        <div class="d-flex align-items-baseline mt-3">
            <div>
                <img src="../img/three-line.png" alt="">
            </div>
            <div class="w-100 ps-2">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-3">
                        <div class="border rounded-4 px-2 py-1 bg-white w-100">
                            <label class="font-12 gre">Name</label>
                            <input type="text" class="bg-white border-0 w-100 p-0" value="Supply and installation of air conditioning units">
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-4 col-sm-6 mb-3">
                        <div class="border rounded-4 px-2 py-1 bg-white w-100">
                            <label class="font-12 gre">Quantity</label>
                            <input type="number" class="bg-white border-0 w-100 p-0" value="01">
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-4 col-sm-6 mb-3">
                        <div class="border rounded-4 px-2 py-1 bg-white w-100">
                            <label class="font-12 gre">Unit Cost</label>
                            <input type="text" class="bg-white border-0 w-100 p-0" value="USD: 125">
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-4 col-sm-6 mb-3">
                        <div class="border rounded-4 px-2 py-1 bg-white w-100">
                            <label class="font-12 gre">Unit Price</label>
                            <input type="text" class="bg-white border-0 w-100 p-0" value="USD: 60">
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-4 col-sm-6 mb-3">
                        <div class="border rounded-4 px-2 py-1 bg-white w-100">
                            <label class="font-12 gre">Total</label>
                            <input type="text" class="bg-white border-0 w-100 p-0" value="USD: 450">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="border rounded-4 px-2 py-1 bg-white w-100">
                            <label class="font-12 gre">Description</label>
                            <textarea class="bg-white border-0 w-100 p-0" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="d-flex align-items-baseline justify-content-between mt-3">
                        <div>
                            <h6 class="mb-0">Total Cost:</h6>
                            <p class="gre mb-0 font-12">USD: 450</p>
                        </div>
                        <button class="light-red rounded-3 px-2 py-1 border-0 deleteLineItem"><i class="fa-solid fa-trash-can text-danger"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
    lineItemsContainer.appendChild(lineItem);

    // Attach event listener to the delete button of the new line item
    lineItem.querySelector('.deleteLineItem').addEventListener('click', function() {
        lineItemsContainer.removeChild(lineItem);
    });
}

// Event listener for the "Add Line Item" button
addLineItemButton.addEventListener('click', function(e) {
    e.preventDefault();
    createLineItem();
});

// Initial line item (if you want to start with one)
createLineItem();

});

document.addEventListener("DOMContentLoaded", function () {
    const assignButton = document.getElementById("assign-btn");
    const inputContainer = document.getElementById("input-container");

    assignButton.addEventListener("click", function () {
        // Create a new input field
        const newInputDiv = document.createElement("div");
        newInputDiv.classList.add("col-xl-4", "col-sm-6", "mb-3");

        newInputDiv.innerHTML = `
            <div class="position-relative">
                <input type="text" class="w-100 input-bg border-0 py-2 px-2 rounded-2" placeholder="Designer">
                <div class="position-x">
                    <button class="remove-btn border-0 bg-transparent">
                        <i class="fa-solid fa-circle-xmark text-danger rounded-circle border border-white"></i>
                    </button>
                </div>
            </div>
        `;

        inputContainer.appendChild(newInputDiv);

        // Add event listener to remove the input field
        const removeButton = newInputDiv.querySelector(".remove-btn");
        removeButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission or unwanted button behavior
            inputContainer.removeChild(newInputDiv);
        });
    });
});

