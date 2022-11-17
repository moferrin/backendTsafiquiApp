export const upload = async (req,res)=>{
    console.log("llego la solicitud");
    let EDFile = req.files.uploaded_file
    if(EDFile){
        console.log("esta seteada")
    }
    //debo crear la capeta a mano
    await EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })

}