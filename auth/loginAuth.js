const AWS = require("aws-sdk");
const bcrypt = require("bcryptjs");

// create dynamodb instance
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// lambda auth functionbj
exports.handler = async (event) => {
  try {
    // Retrieve username and password from the request
    const { username, password } = JSON.parse(event.body);

    // Retrieve hashed password from DynamoDB based on the username
    const params = {
      TableName: "users_table",
      Key: { username },
    };

    const result = await dynamoDB.get(params).promise();

    if (result.Item && bcrypt.compareSync(password, result.Item.password)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Authentication successful" }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Authentication failed" }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
