export const getJournalByName=(req,res,next)=>{      //이름으로 journal을 가져오는 것입니다
    const {name} =req.query;
    //get journal from DB WHERE journal.name==name
    res.json(journal);
}

export const getJournalList=(req,res,next)=>{    //journal 리스트를 가져오는 것입니다
    //get all journal list from DB
    res.json(journalList);
}

export const addJournal = (req,res,next)=>{  //journal을 추가하는 것입니다
    const {journal}=req.body;
    //insert journal into DB
    res.status(200).json({success:true});
}

export const deleteJournal=(req,res,next)=>{  //특정 이름을 가진 journal을 지우는 것입니다
    const {name}=req.params;
    //delete journal from DB where journal.name==name
    res.status(200).json({success:true});
}


export const editJournal=(req,res,next)=>{  //특정 이름을 가진 journal을 수정하는 것입니다
    const {name}=req.params;
    //edit journal from DB where journal.name==name
    res.status(200).json({success:true});
}