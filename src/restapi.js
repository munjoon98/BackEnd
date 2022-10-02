import {getJournalByName,getJournalList,addJournal, deleteJournal, editJournal} from 'fi'
import express from 'express'

const router=express.Router();

router.get('/info',getJournalByName);
router.get('/',getJournalList);
router.post('/write',addJournal);
router.delete('/:name',deleteJournal);
router.put('/:name',editJournal);

export default router;