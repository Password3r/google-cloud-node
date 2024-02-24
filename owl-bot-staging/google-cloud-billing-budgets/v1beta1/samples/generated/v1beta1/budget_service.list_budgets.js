// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START billingbudgets_v1beta1_generated_BudgetService_ListBudgets_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of billing account to list budgets under. Values
   *  are of the form `billingAccounts/{billingAccountId}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Set the scope of the budgets to be returned, in the format of the
   *  resource name. The scope of a budget is the cost that it tracks, such as
   *  costs for a single project, or the costs for all projects in a folder. Only
   *  project scope (in the format of "projects/project-id" or "projects/123") is
   *  supported in this field. When this field is set to a project's resource
   *  name, the budgets returned are tracking the costs for that project.
   */
  // const scope = 'abc123'
  /**
   *  Optional. The maximum number of budgets to return per page.
   *  The default and maximum value are 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. The value returned by the last `ListBudgetsResponse` which
   *  indicates that this is a continuation of a prior `ListBudgets` call,
   *  and that the system should return the next page of data.
   */
  // const pageToken = 'abc123'

  // Imports the Budgets library
  const {BudgetServiceClient} = require('@google-cloud/billing-budgets').v1beta1;

  // Instantiates a client
  const budgetsClient = new BudgetServiceClient();

  async function callListBudgets() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = budgetsClient.listBudgetsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListBudgets();
  // [END billingbudgets_v1beta1_generated_BudgetService_ListBudgets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
