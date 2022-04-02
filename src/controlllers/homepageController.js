let getHomepage =(req, res) => {
    return res.render("GI-Chatbot.ejs")

};

module.exports={
    getHomepage: getHomepage
};