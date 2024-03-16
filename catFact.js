class CatFact {
    constructor(status,user,text,type,deleted,createdAt,updatedAt)
    {
        this.status=status;
        this.user=user;
        this.text=text;
        this.type=type;
        this.deleted=deleted;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
    }
}

module.exports = {CatFact};