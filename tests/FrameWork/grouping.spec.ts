import { test } from "@playwright/test";

test.describe('Group 1', async () => {

    test('Test case 1', async ({ page }) => {
        console.log("This is Test Case-1");

    });
    test('Test case 2', async ({ page }) => {
        console.log("This is Test Case-2");

    });
});

test.describe('Group 2', async () => {

    test('Test case 3', async ({ page }) => {
         console.log("This is Test Case-3")
     });
    test('Test case 4', async ({ page }) => {
         console.log("This is Test Case-4");

    });

    });



