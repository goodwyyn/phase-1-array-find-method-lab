// code your solution here
function superbowlWin() {
    const record = {
        year: "2015",
        result: "w",

    };
}
superbowlWin = (record)=>{
    const result =record.find(record=>record.result==="w");
    return !!result? result.year:undefined;

}