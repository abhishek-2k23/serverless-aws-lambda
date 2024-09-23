export const UserController = (req, res) => {
    res.send("Hello World! from User");
}

export const getUser = (req, res) => {
    res.status(200).json({message : `Hello ${req.params.id} from User`});
}