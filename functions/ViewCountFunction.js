// // create dynamodb instance
const dynamoDB = require("aws-sdk").DynamoDB.DocumentClient();

// Lambda function for tracking and displaying view count
exports.handler = async (event) => {
  try {
    // get listing ID from the request
    const { listingId } = JSON.parse(event.body);

    // update view count in DynamoDB
    const updateParams = {
      TableName: "listings_table",
      Key: { id: listingId },
      UpdateExpression: "ADD viewCount :val",
      ExpressionAttributeValues: { ":val": 1 },
      ReturnValues: "UPDATED_NEW",
    };

    const updateResult = await dynamoDB.update(updateParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ viewCount: updateResult.Attributes.viewCount }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
