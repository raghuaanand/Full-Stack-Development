import { createClient } from "redis";

const client = createClient();

async function main(){
    await client.connect();
    console.log("Connected to Redis");

    while(1){
        const response  = await client.brPop("submissions", 0);
        console.log(response);

        await new Promise(resolve => setTimeout(resolve, 1000));
        // Process the response here
        // For example, you can parse the response and handle it accordingly
        if (response) {
            const submission = JSON.parse(response.element);
            console.log(`Processing submission: ${submission.problemId} by user ${submission.userId}`);
            // Add your processing logic here
        } else {
            console.log("No submissions to process");
        }
    }
}

main()
