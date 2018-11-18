// This is specifically written for the Arduino Mega 2560
#include <RGBmatrixPanel.h>
#define ledPin 13
#define CLK 11
#define OE 9
#define LAT 10
#define A A0
#define B A1
#define C A2

RGBmatrixPanel matrix(A, B, C, CLK, LAT, OE, false);

char state = '3';
String currentlyRendered = String("");

void setup()
{
  pinMode(ledPin, OUTPUT);
  matrix.begin();
  uint8_t r = 0, g = 0, b = 0;
  Serial.begin(9600);
  Serial1.begin(38400);
}

void loop()
{
  if (Serial1.available())
  {
    Serial.println("reading serial");
    int interimState = Serial1.read();
    if (interimState == 0)
    {
      state = '0';
    }
    else if (interimState == 120)
    {
      state = '1';
    }
    else if (interimState == 248)
    {
      state = '2';
    }
    Serial.println(interimState);
  }
  if (state == '0' && currentlyRendered != "bringSoda")
  {
    clearScreen();
    currentlyRendered = "bringSoda";
    bringSoda();
  }
  else if (state == '1' && currentlyRendered != "leaveAlone")
  {
    currentlyRendered = "leaveAlone";
    leaveAlone();
  }
  else if (state == '2' && currentlyRendered != "fortniteTime")
  {
    clearScreen();
    currentlyRendered = "fortniteTime";
    fortniteTime();
  }
  else if (state == '3')
  {
    clearScreen();
    for (int y = 0; y < 16; y++)
    {
      for (int x = 0; x < 32; x++)
      {
        placeHolder(x, y, 2);
        delay(5);
      }
    }
    for (int y = 0; y < 16; y++)
    {
      for (int x = 0; x < 32; x++)
      {
        placeHolder(x, y, 0);
        delay(5);
      }
    }
  }
}

void clearScreen()
{
  matrix.fillScreen(matrix.Color333(0, 0, 0));
}

void placeHolder(int x, int y, int red)
{
  matrix.drawPixel(x, y, matrix.Color333(red, 0, 0));
}

void fortniteTime()
{
  // draw some text!
  matrix.setCursor(1, 0); // start at top left, with one pixel of spacing
  matrix.setTextSize(1);  // size 1 == 8 pixels high

  // print each letter with a rainbow color
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print('F');
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print('O');
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print('R');
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print('T');
  //matrix.setTextColor(matrix.Color333(2,1,1));
  //matrix.print('');

  matrix.setCursor(1, 9);
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print('N');
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print('I');
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print('T');
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print("E");
  matrix.setTextColor(matrix.Color333(0, 0, 6));
  matrix.print("!");
}

void bringSoda()
{
  // draw some text!
  matrix.setCursor(1, 0); // start at top left, with one pixel of spacing
  matrix.setTextSize(1);  // size 1 == 8 pixels high

  // print each letter with a rainbow color
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('B');
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('R');
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('I');
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('N');
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('G');

  matrix.setCursor(1, 9);
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('S');
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('O');
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print('D');
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print("A");
  matrix.setTextColor(matrix.Color333(2, 1, 1));
  matrix.print("!");
}

void leaveAlone()
{
  // draw some text!
  matrix.setCursor(1, 0); // start at top left, with one pixel of spacing
  matrix.setTextSize(1);  // size 1 == 8 pixels high

  // print each letter with a rainbow color
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('L');
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('E');
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('A');
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('V');
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('E');

  matrix.setCursor(1, 9); // next line
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('A');
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('L');
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print('O');
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print("N");
  matrix.setTextColor(matrix.Color333(7, 0, 0));
  matrix.print("E");
}
