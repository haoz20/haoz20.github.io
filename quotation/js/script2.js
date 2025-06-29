// var data = [
//     { quantity: 2, description: 'Stock Item Example 0001', unitPrice: 1000 },
//     { quantity: 3, description: 'Stock Item Example 0002', unitPrice: 2000 },
//     { quantity: 1, description: 'Service Charge Invoicing Item 001', unitPrice: 1000 },
//     {
//         quantity: 1,
//         description: 'Service Charge Invoicing Item 002',
//         details: ['Additional line 1 for this item', 'Additional line 2 for this item'],
//         unitPrice: 200
//     }
// ]

// // Fetch the data from a given URL
// var promise = fetch('http://127.0.0.1:5500/data/data.json')
// // data has arrived, we transform it
// var p2 = promise.then(data => { 
//     return data.json() 
// })
// // data has been transformed, we use it
// p2.then(json => {
//     console.log('Data Received',json)
// })

var quoationData = [
    {
        description: "Notebook (A5)",
        quantity: 2,
        unitPrice: 55
    },
    {
        description: "Handmade Soap",
        quantity: 1,
        unitPrice: 120
    },
    {
        description: "Canvas Tote Bag",
        quantity: 3,
        unitPrice: 220
    }
]

const items = [
  { "name": "Notebook (A5)", "price": 55 },
  { "name": "Handmade Soap", "price": 120 },
  { "name": "Ballpoint Pen Set", "price": 90 },
  { "name": "Mini Plant Pot", "price": 150 },
  { "name": "Canvas Tote Bag", "price": 220 },
  { "name": "Desk Organizer", "price": 180 },
  { "name": "Scented Candle", "price": 200 }
];


const itemSelect = $("#newItemDescription");
items.forEach(item => {
    const option = $("<option></option>")
        .val(item.name)
        .text(item.name);
    itemSelect.append(option);
});

itemSelect.on('change', function() {
    const selectedName = $(this).val();
    const found = items.find(item => item.name === selectedName);
    if (found) {
        $("#newItemPPU").val(found.price);
    } else {
        $("#newItemPPU").val('');
    }
});


function addItem() {
    var d = $("#newItemDescription").val()
    var u = $("#newItemPPU").val()
    var q = $("#newItemQty").val()
    console.debug(d, u, q)
    quoationData.push({
        description: d,
        quantity: Number.parseFloat(q),
        unitPrice: Number.parseFloat(u)
    })
    $('#exampleModal').modal('hide')
    renderTable()
}

function renderTable() {
    var data = quoationData
    var subTotal = 0
    data.forEach((e) => {
        subTotal = subTotal + (e.unitPrice * e.quantity)
    })
    var vat = (subTotal * .07).toFixed(2)
    var total = (subTotal * 1.07).toFixed(2)

    console.log('subTotal', subTotal)
    $("#subTotal").html(subTotal.toFixed(2))
    $("#vat").html(vat)
    $("#total").html(total)

    var dataRows = data.map((e, i) => {
        let amount = e.quantity * e.unitPrice
        return `<tr class="data-row">
                            <td class="text-center">${e.quantity}</td>
                            <td class="data">
                                <button onclick="deleteItem(${i})">X</button>
                                ${e.description}
                            </td>
                            <td class="text-right">${e.unitPrice.toFixed(2)}</td>
                            <td class="text-right">${amount.toFixed(2)}</td>
                        </tr>`;
    })

    $(".data-row").remove()

    // Insert into the table
    dataRows.forEach((r) => {
        $('#dataTable').append(r)
    })

}

function deleteItem(i) {
    quoationData.splice(i, 1)
    renderTable()
}

// $(document).ready(function () {
//     // $.getJSON('data/data.json',
//     //     data => {
//     //         // render the table
//     //         quoationData = data;

//     //         var d = new Date()
//     //         $('#quotationDate').html(d.toDateString())
//     //         renderTable()
//     //     })

    
// })


$(document).ready(function () {
    var d = new Date()
    $('#quotationDate').html(d.toDateString())
    renderTable()
})