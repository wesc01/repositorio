import { Router } from "express";   
const router = Router();


router.get('/', (req, res) => {
    res.send('Hello World wes!');
});

router.get('/users', (req, res) => {    
    res.send('Hello Users!');
});
export default router;  