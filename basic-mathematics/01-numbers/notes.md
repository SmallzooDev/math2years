# 1. Numbers

## Preface 

>In this part we develop systematically the rules for operations with numbers, relations among numbers, and properties of these operations and relations: addition, multiplication, inequalities, positivity, square roots, n-th roots. We find many of them, like commutativity and associativity, which recur frequently in mathematics and apply to other objects. They apply to complex numbers, but also to functions or mappings (in this case, commutativity does not hold in general and it is always an interesting problem to determine when it does hold).
>
>Source: Serge Lang, *Basic Mathematics*, Springer New York, 1988, introduction to Part One.


## The Integers

The book describes the integers on a geometric line (the distance from a point).

adding zero case, the cases below are the same.

$$
0 + a = a + 0 = a
$$


about adding `negative` numbers

$$
a + (-a) = 0 \quad \text{and also} \quad  -a + a = 0
$$

$-a$ is the additive inverse of $a$ : the number that gives $0$ when added to $a$. 

This equation defines $-a$.

book said read $-a$ as "minus a", not "negative a". $-a$ is not always negative.

the parentheses in $a + (-a)$ only keep $+$ and $-$ apart. $(-a)$ is a single number, so there is nothing to expand.

on the line, $-a$ is on the other side of $0$, at the same distance as $a$.

$$
\rule[0.5ex]{3em}{0.4pt}\underset{\mathclap{\textstyle a}}{\vert}\rule[0.5ex]{7em}{0.4pt}\underset{\mathclap{\textstyle
0}}{\vert}\rule[0.5ex]{7em}{0.4pt}\underset{\mathclap{\textstyle -a}}{\vert}\rule[0.5ex]{3em}{0.4pt}
$$

in the picture, $a$ is left of $0$, so $a$ is negative and $-a$ is positive. If $a = -2$, then $-a = 2$.

adding means moving along the line. $3 + (-3)$ starts at $3$, moves 3 units left, and lands on $0$.

$$
3 = -(-3)
$$

$-(-3)$ is the number on the other side of $-3$, which is $3$.



## Rules For Addition

N3.
$$
\text{If } a + b = 0 \text{, then } b = -a \text{ and } a = -b
$$


Proof.
$$
-a + a + b = -a + 0 = -a
$$

Since
$$
-a + a + b = 0 + b = b
$$

we find 
$$
b = -a
$$

N4.
$$
a = -(-a)
$$

this true cuz 
$$
a + (-a) = 0
$$

N5.
$$
-(a + b) = -a -b
$$

Proof.

if x, y are integers, then x = -y and y = -x means that x + y = 0

so to proof, we must show that 
$$
(a + b) + (-a - b) = 0
$$

$$
\begin{aligned}
(a + b) + (-a - b) &= (a + b) + (-a + (-b)) && \text{by } x - y = x + (-y) \\
&= a + b + (-a) + (-b) && \text{by associativity} \\
&= a + (-a) + b + (-b) && \text{by commutativity} \\
&= (a + (-a)) + (b + (-b)) && \text{by associativity} \\
&= 0 + 0 && \text{by } a + (-a) = 0 \\
&= 0 && \text{by } 0 + a = a
\end{aligned}
$$

If a,b are positive integers, then a + b is also a positive integer

thus 

if a,b are negative integers, then a + b is negative.

if a = -n and b = -m where m, n are positive
$$
a + b = -n - m = -(n + m)
$$

## Rules For Multiplication

N6.
$$
1a = a \text{ and } 0a = 0
$$

Idiom.
$$
\begin{aligned}
a(b + c) &=  ab + ac \\
\text{and also} \\
(b + c)a &=  ba + ca \\
\end{aligned}
$$

N7.
$$
\begin{aligned}
(-1)a &= -a \\
\end{aligned}
$$


N8.
$$
\begin{aligned}
-(ab) &= (-a)b \\
\end{aligned}
$$

Proof.

We must show that (-a)b is negative of ab 

So we need to show 
$$
\begin{aligned}
ab + (-a)b &= 0 \\
\end{aligned}
$$

$$
\begin{aligned}
ab + (-a)b &=  (a + (-a))b &= 0b &=  0 \\
\end{aligned}
$$


N9.
$$
\begin{aligned}
-(ab) = a(-b)
\end{aligned}
$$


N10.
$$
\begin{aligned}
(-a)(-b) &= ab \\
\end{aligned}
$$

$$
\begin{aligned}
(-1)(-1) &= -(1(-1)) &= -(-1) \\
\end{aligned}
$$

N11.
$$
\begin{aligned}
a^{m + n} &=  a^ma^n \\
\end{aligned}
$$

N12.
$$
\begin{aligned}
(a^m)^n &= a^{mn} \\
\end{aligned}
$$

Important.
$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a - b)^2 &= a^2 - 2ab + b^2 \\
(a + b)(a - b) &= a^2 - b^2 \\
\end{aligned}
$$

## Even and Odd Integers; Divisibility

Theorem 1. 
Let a, b be positive integers.
If a is even and b is even, then a + b is even,
If a is even and b is odd, then a + b is odd,
If a is odd and b is even, then a + b is odd,
If a is odd and b is odd, then a + b is even,


Proof.
$$
\begin{aligned}
a + b &= 2n + 2k + 1 \\
&= 2(n + k) + 1 \\
&= 2m + 1 \text{(letting m = n + k)} \\
\end{aligned}
$$


Theorem 2.
Let a be a positive integer. If a is even, then a^2 is even. If a is odd then a^2 is odd.
Proof.
Assmue that a is even. This means that a = 2n for some positive integer n. 
Then
$$
\begin{aligned}
a^2 &= 2n * 2n &= 2(2n^2) &= 2m \\
\text{letting} m &= 2n^2 \\
\end{aligned}
$$


Odds are
$$
\begin{aligned}
a^2 &= (2n + 1)^2 &=  (2n^2) + 2(2n)1 + 1^2 \\
&= 4n^2 + 4n + 1 
&= 2(2n^2 + 2n) + 1 
\end{aligned}
$$


Corollary.
Let a be a positive integer. If a^2 is even, then a is even. If a^2 is odd, then a is odd

Proof.
$$
\text{If } a^2 \text{ is even then a cannot be odd because the square of an odd number is odd}
\text{If } a^2 \text{ is odd then a cannot be even because the square of an even number is even}
$$


