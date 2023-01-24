export interface Developer {
    fullname: String
    age: Number
    headline: String
    job_title: String
    description: String
    email: String
    mobile: String
    educations: Education[]
    experiences: Experience[]
    skills: Skill[]
}

export interface Education {
    school: String
    degree: String
    from: Date
    to?: Date //If null it's be continuing
    grade?: Number
    description?: String
}

export interface Experience {
    title: String
    employment_type: String
    company_name: String
    location: String
    location_type: Location_Type
    from: Date
    to?: Date //If null it's be continuing
    description?: String
}

export interface Skill {
    title: String
    certification?: Certificate
}

export interface Certificate {
    title: String
    issue_organization: String
    issue_date: Date
    expiration_date: Date
    credential_url: String  
}

export enum Location_Type {
    ONSITE,
    HIBRID,
    REMOTE
}
