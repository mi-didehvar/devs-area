import { Developer, Location_Type } from '../types';
import _ from 'lodash'
export class Developers {
    private developers?: Developer[] = [
        {
            age: 10,
            fullname: "Mohammad Didehvar",
            headline: "Senior Software Developer @ Xaas Cloud Computing Company",
            job_title: "Senior Software Developer",
            description: "A Front-end development using vue.js lover, Vite interested, high ability coder with lot's of energy to write clean codes and create powerful apps",
            email: "mi.didehvar@gmail.com",
            mobile: "+98-991-337-8001",
            skills: [
                {
                    title:"Test"
                }
            ],
            experiences: [
                {
                    company_name: "Test",
                    employment_type: "Test",
                    location: "Tehran",
                    location_type: Location_Type.REMOTE,
                    title: 'Developer',
                    description: "Test",
                    from:  new Date()
                }
            ],
            educations: [
                {
                    school:"Test",
                    degree: "Assosiated Degree",
                    from: new Date(),
                    description:"Test",
                    grade: 10,
                }
            ],
        },
        {
            age: 10,
            fullname: "Mohammad Didehvar",
            headline: "Senior Software Developer @ Xaas Cloud Computing Company",
            job_title: "Senior Software Developer",
            description: "A Front-end development using vue.js lover, Vite interested, high ability coder with lot's of energy to write clean codes and create powerful apps",
            email: "mi.didehvar@gmail.com",
            mobile: "+98-991-337-8001",
            skills: [
                {
                    title:"Test"
                }
            ],
            experiences: [
                {
                    company_name: "Test",
                    employment_type: "Test",
                    location: "Tehran",
                    location_type: Location_Type.REMOTE,
                    title: 'Developer',
                    description: "Test",
                    from:  new Date()
                }
            ],
            educations: [
                {
                    school:"Test",
                    degree: "Assosiated Degree",
                    from: new Date(),
                    description:"Test",
                    grade: 10,
                }
            ],
        },
    ]
    
    getDevelopers: Developer[] = () => {
        return this.developers
    }

    findDeveloper: Developer = (query: Developer) => {
        return this.developers?.find((x) => _.isEqual(x, query))
    }
}