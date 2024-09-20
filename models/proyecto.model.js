class Proyecto {
    constructor(
        id,
        name,
        description,
        startDate,
        endDate,
        status = "en progreso",
        teamMembers,
        budget){
        // Contructor starts here
        this.id = id,
        this.name = name,
        this.description = description,
        this.startDate = startDate,
        this.endDate = endDate,
        this.status = status,
        this.teamMembers = teamMembers,
        this.budget = budget
    }
}