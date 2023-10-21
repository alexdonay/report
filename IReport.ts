export default interface IReport{
    title:string
    templateName:string
    data:Object
    generateReport(): void
}