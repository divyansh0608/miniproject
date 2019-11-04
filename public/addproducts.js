$(function () {
    let ProductName = $('#ProductName')
    let ProductPrice = $('#ProductPrice')
    let Seller = $('#Seller')
    let ProductImage=$('#ProductImage')
    console.log("reached js");
    $('#btnProductAdd').click(function () {
        console.log("inside function!!!"),
        addProduct(
            ProductName.val(),
            console.log("name entered!!!"),
            Seller.val(),
            console.log("seller entered!!!"),
            ProductPrice.val(),
            console.log("Price entered!!!"),
            ProductImage.val(),
            function (addedProduct) { console.log("inside function added product!!!"),
                window.alert("Added " + addedProduct.ProductName + " to Database")
            }
        )
    })
})