import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt"; 
import Cookies from 'js-cookie'; // Импортируем js-cookie

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && await bcrypt.compare(password, user.password)) {
      // Установить куку с данными пользователя, включая username
      const userData = { id: user.id, email: user.email, username: user.username };
      Cookies.set('user', JSON.stringify(userData)); // Устанавливаем куку
      return NextResponse.json({ user: userData }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
