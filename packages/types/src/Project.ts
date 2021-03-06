/**
 * Copyright (c) Formium, Inc. and its affiliates.
 *
 * This source code is licensed under the Business Source License license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 *
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* eslint-disable @typescript-eslint/consistent-type-assertions */

/**
 * Project
 *
 * @public
 */
export interface Project {
  /**
   * unique id of project
   */
  id: string;

  /**
   * customer that the project belongs to
   */
  customerId: string;

  /**
   * slug of the project
   */
  slug: string;

  /**
   * name of the project
   */
  name: string;

  /**
   * number of admins on the project
   */
  adminCount: number;

  /**
   * number of users on the project
   */
  userCount: number;

  /**
   * created timestamp
   */
  createAt: string;

  /**
   * created by user id
   */
  createId: string;

  /**
   * updated timestamp
   */
  updateAt: string;

  /**
   * updated by user id
   */
  updateId: string;

  /**
   * deleted timestamp
   */
  deleteAt?: string;

  /**
   * deleted by user id
   */
  deleteId?: string;
}
