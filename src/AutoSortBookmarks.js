/*
 * Copyright (C) 2014-2015  Boucher, Antoni <bouanto@zoho.com>
 * Copyright (C) 2016-2022  Eric Bixby <ebixby@yahoo.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import AsbUtil from "./AsbUtil";
import Sorter from "./Sorter";

/**
 * Main entry-point for add-on.
 */
AsbUtil.log("main:begin");
try {
  // eslint-disable-next-line no-unused-vars
  const sorter = new Sorter();
  //sorter.sortIfAuto();
} catch (error) {
  console.error(error);
}
AsbUtil.log("main:end");
