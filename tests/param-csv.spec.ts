import {test} from "@playwright/test"
import {parse} from "csv-parse"
import fs from 'fs'

const path = "test-data/Data.csv"

const fileContent = fs.readFileSync(path, 'utf-8')

const recors = parse(fileContent, {
    columns:true,
    skip_empty_lines:true
})

test.describe('CSV Data test', async()=>{


    test('CSV Data test pw', async({page})=>{



    })



})