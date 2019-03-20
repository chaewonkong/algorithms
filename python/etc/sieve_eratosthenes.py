"""Sieve of Eratosthenes in Python

For given n, 
return a list contains only prime numbers below n"""


import time


def sieve(n):
	"""Return list of prime numbers less than equal to n"""

	results = [1 for _ in range(n+1)]
	results[0], results[1] = 0, 0

	div = 2
	while div <= n // 2 + 1:
		for i in range(div * div, n+1, div):
			if results[i] == 0:
				continue
			else:
				results[i] = 0
		div += 1

	return [i for i in range(len(results)) if results[i] == 1]
