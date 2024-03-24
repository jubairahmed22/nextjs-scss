
const dynamicProductPage = ({params, searchParams}) => {

    console.log(params);

    return (
        <div>
            This is dynamic product page {params.productId} 
            This is dynamic product page {searchParams.category} 
        </div>
    );
};

export default dynamicProductPage;