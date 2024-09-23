export const PostController = (req, res) => {
    res.send({ message: 'Hello from post' });
}

export const GitData = async(req,res) => {
    try{
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        console.log(data[0]?.login);
        res.status(200).json({firstUser : data[0]});
    }catch(error){  
        res.status(400).json({message: error.message});
    }
}

