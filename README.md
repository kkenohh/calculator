# calculator

## Introduction

I realized that I tend to visualize too much of a project at once, thinking about how I'm going to do this or that as a whole. I hope that over time I can stop doing that, but rather break it down into smaller problems.

I think that starting with the foundations is a good idea such as the operator methods, but I also think starting with layout is pretty helpful.

## Log

- Currently, I'm still working on the project. I've been running into a lot of problems, though.

- I'm very close to being done I think, there are just small things that aren't working and I haven't done anything that allows keyboard input yet. I think I want to stop here though because I got the basis of the project. The problems I need to fix are: **Dividing 0 by a number returns the number instead of 0, pressing the areas around the buttons mess up the program and outputs NaN, and doing a - b equals and then using another operator outputs nothing as the total.**

- Dec. 20, 2024: I started working on this again to fix some things and add functionality. I added keydown event listener to the window so that the user can use the keyboard to input into the calculator. I ran into an issue where it wouldn't register any keydowns. I fixed it by moving the window listener above the button listeners. In the future, I could add more functionality like maybe trig functions, roots, exponents, etc.
