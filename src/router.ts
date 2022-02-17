import express from 'express';
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Hello Word');
})

router.post('/test-post', (req,res)=>{
    return res.send('Rota post')
})

export = router