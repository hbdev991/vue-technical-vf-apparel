/* 
Filter the api returned results to make sure the data is in the format I need in order to
avoid doing any logic in the components themselves
*/

export const parseProductData = (products) => {
    return products.filter(product => product.variants[0].featured_image)
    .map(product => {
        const { id, price, title: variantTitle, featured_image: {src} } = product.variants[0]
        const {title} = product
        return {
            id,
            price,
            src,
            title,
            variantTitle
        }
    })
}