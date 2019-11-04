$(function () {
    let ProductName = $('#ProductName')
    let ProductPrice = $('#ProductPrice')
    let Seller = $('#Seller')
    let ProductImage=$('ProductImage')
    
    $('#btnProductAdd').click(function () {
        console.log('inside function!!!'),
        addProduct(
            ProductName.val(),
            Seller.val(),
            ProductPrice.val(),
            ProductImage.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.ProductName + " to Database")
            }
        )

    })

})