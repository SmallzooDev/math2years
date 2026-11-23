# 1. Numbers Exercises
Justify each step, using commutativity and associativity in proving the following identities.

## Rules for adds
e-1. 
$$
\begin{aligned}
(a + b) + (c + d) &= (a + d) + (b + c) \\
a + b + c + d &= a + d + b + c && \text{by associativity} \\
a + b + c + d &= a + b + c + d && \text{by commutativity}
\end{aligned}
$$

e-11.
$$
\begin{aligned}
(a + b + c) + (-a + (-b) + (-c)) &= a + b + c + (-a) + (-b) + (-c) && \text{by associativity} \\
&= a + (-a) + b + (-b) + c + (-c) && \text{by commutativity} \\
&= (a + (-a)) + (b + (-b)) + (c + (-c)) && \text{by associativity} \\
&= 0 + 0 + 0 && \text{by } a + (-a) = 0 \\
&= 0 && \text{by } 0 + a = a
\end{aligned}
$$

$$
-(a + b + c) = -a + (-b) + (-c) \quad \text{by N3}
$$

e-12.
$$
\begin{aligned}
(a - b - c) + (-a + b + c) &= (a + (-b) + (-c)) + (-a + b + c) && \text{by } x - y = x + (-y) \\
&= a + (-b) + (-c) + (-a) + b + c && \text{by associativity} \\
&= a + (-a) + (-b) + b + (-c) + c && \text{by commutativity} \\
&= (a + (-a)) + ((-b) + b) + ((-c) + c) && \text{by associativity} \\
&= 0 + 0 + 0 && \text{by } a + (-a) = 0 \text{ and } -a + a = 0 \\
&= 0 && \text{by } 0 + a = a
\end{aligned}
$$

$$
-(a - b - c) = -a + b + c \quad \text{by N3}
$$

e-13.
$$
\begin{aligned}
(a - b) + (b - a) &= (a + (-b)) + (b + (-a)) && \text{by } x - y = x + (-y) \\
&= a + (-b) + b + (-a) && \text{by associativity} \\
&= a + (-a) + (-b) + b && \text{by commutativity} \\
&= (a + (-a)) + ((-b) + b) && \text{by associativity} \\
&= 0 + 0 && \text{by } a + (-a) = 0 \text{ and } -a + a = 0 \\
&= 0 && \text{by } 0 + a = a
\end{aligned}
$$

$$
-(a - b) = b - a \quad \text{by N3}
$$

e-22.

Prove the cancellation law for addition:
$$
\begin{aligned}
\text{If } a + b &= a +c \\
\text{then} \\
b &= c \\
\end{aligned}
$$

$$
\begin{aligned}
a + b &= a + c \\
a + b -a &=  a + c -a \\
a + b + (-a) &= a + c + (-a) && \text{by } x - y = x + (-y) \\
a + (-a) + b &= a + (-a) + c && \text{by commutativity} \\
(a + (-a)) + b &= (a + (-a)) + c && \text{by associativity} \\
0 + b &= 0 + c && \text{by } a + (-a) = 0 \\
b &= c && \text{by } 0 + a = a \\
\end{aligned}
$$


e-23.
$$
\begin{aligned}
a + b &= a \\
a + b -a &= a -a \\
a + b + (-a) &= a + (-a) && \text{by } x - y = x + (-y) \\
a + (-a) + b &= a + (-a) && \text{by commutativity} \\
(a + (-a)) + b &= a + (-a) && \text{by associativity} \\
0 + b &= 0 && \text{by } a + (-a) = 0 \\
b &= 0 && \text{by } 0 + a = a \\
\end{aligned}
$$

## Rules for multiplication

e-1.

a)
$$
\begin{aligned}
2^83^3a^{11}b^4
\end{aligned}
$$

d)
$$
\begin{aligned}
32^3a^3(2ab^2)^3(3ab)^2 \\
32^3a^32^3a^3b^63^2a^2b^2 \\
2^63^3a^8b^8
\end{aligned}
$$


f)
$$
\begin{aligned}
2^5 * a^4 * b^5 * a^3 * b^2 * 2^4 * 3^4 * a^4 * b^{12} \\
2^93^4a^{11}b^{19}
\end{aligned}
$$

e-2.

$$
\begin{aligned}
(a + b)^3 &= (a + b)(a + b)(a + b) \\
&= (a^2 + 2ab + b^2)(a + b) \\
&= a^3 + 2a^2b + ab^2 + a^2b + 2ab^2 + b^3 \\
&= a^3 + 3a^2b + 3ab^2 + b^3 \\ 
\end{aligned}
$$


e-33.
$$
\begin{aligned}
3^3 * 25000 \text{ and } 3^4 * 25000
\end{aligned}
$$


## Even and Odd Integers; Divisibility

e-2.
Prove: If a is even and b is any positive integer, then ab is even.
$$
\begin{aligned}
ab &= (2k)b \\
&= 2(kb)
\end{aligned}
$$

e-3.
Prove: If a is even, then a^3 is even.
$$
\begin{aligned}
\text{by If a is even and b is even, then a + b is even,}
a^3 &= a^2 * a \\
\end{aligned}
$$

e-5.
Prove: If n is even then (-1)^n = 1.
$$
\begin{aligned}
(-1)^n &= (-1)^{2k} \\
&= ((-1)^2)^k \\
&= (1)^k \\
\end{aligned}
$$

e-7.
Prove: If m,n are odd, then the product mn is odd
$$
\begin{aligned}
mn &= (2a + 1)(2b + 1) \\
&= 4ab + 2a + 2b + 1 \\ 
&= 2(2ab + a + b) + 1
\end{aligned}
$$

e-24.

Let $a, b$ be integers. Define $a \equiv b \pmod{5}$, which we read "$a$ is congruent to $b$ modulo $5$", to mean that $a - b$ is divisible by $5$.

Prove: If $a \equiv b \pmod{5}$ and $x \equiv y \pmod{5}$, then

$$
\begin{aligned}
a + x &\equiv b + y \pmod{5}, \\
ax &\equiv by \pmod{5}.
\end{aligned}
$$
