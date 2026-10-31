import {test} from "@playwright/test"

test.describe('Grp1', async()=>{


    test('Test1', async()=>{

        console.log('This is test1')


    })


    test('Test 2', async()=>{

        console.log('This is test2')

    })



})

test.describe('Grp2', async()=>{


    test('Test1', async()=>{

        console.log('This is test3')


    })


    test('Test 4', async()=>{

        console.log('This is test4')

    })

})

