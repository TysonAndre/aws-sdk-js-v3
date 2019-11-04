import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProjectsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};