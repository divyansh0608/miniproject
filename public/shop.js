function fetchProducts (done) {
    $.get('/Api/productModel', function (data) {
        done(data)
    })
}

function addProduct (ProductName, Seller, ProductPrice,ProductImage, done) {
    $.post('/Api/productModel', {
        ProductName: ProductName,
        Selleracturer: Seller,
        ProductPrice: ProductPrice,
        ProductImage:ProductImage
    }, function (data) {
        done(data)
    })
}

function createProductCard (product) {
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-ProductName">${product.ProductName}</h4>
        <div class="product-Selleracturer">${product.Selleracturer}</div>
        <div class="row">
            <div class="col m-3 p-3">
                <b>Rs. ${product.ProductPrice}</b>
            </div>
            <button class="col btn btn-primary m-3">Buy</button> 
        </div>
    </div>`
        )
}