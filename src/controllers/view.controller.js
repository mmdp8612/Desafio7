import ProductMongo from "../dao/ProductMongo.js";
import CartMongo from "../dao/CartMongo.js";

const productMongo = new ProductMongo();
const cartMongo = new CartMongo();

const login = async (req, res) => {
    res.render("login");
}

const register = async (req, res) => {
    res.render("register");
}

const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/view/login");
}

const profile = (req, res) => {
    res.render("profile");
}

const products = async (req, res) => {
    try{
        const { limit=8, page=1, order='ASC', search } = req.query;
        const products = await productMongo.getProducts({
            limit,
            page,
            order
        }, search);
        
        const { totalPages, hasPrevPage, hasNextPage, prevPage, nextPage } = products;

        return res.render("products", {
            products: products.docs,
            paginate: {
                totalPages,
                hasPrevPage,
                hasNextPage,
                prevPage,
                nextPage
            }
        })
    }catch(error){
        
    }
}

const productsById = async (req, res) => {
    try {
        const { pid } = req.params;
        const product = await productMongo.getProductById(pid);
        res.render("product", product);
    } catch (error) {
        
    }
}

const cartProducts = async (req, res) => {
    try {
        const { cid } = req.params;
        const cartProducts = await cartMongo.getProductsCart(cid);
        res.render("cart", {cartProducts});
    } catch (error) {
        res.render("cart", {cartProducts: null});
    }
}

const realTimeProducts = (req, res) => {
    res.render("realtimeproducts");
}

const chat = (req, res) => {
    res.render("chat");
}

const home = (req, res) => {
    res.render("home", {user: req.session.user});
}

export {
    login,
    register,
    logout,
    profile,
    products,
    productsById,
    realTimeProducts,
    chat,
    cartProducts,
    home
};