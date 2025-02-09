import { NextResponse } from "next/server";
import { connect } from "../lib/Database";


export default async function admin() {
  return NextResponse.json("Hello", true);
}
