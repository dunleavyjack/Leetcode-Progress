from heapq import heappush, heappop


class MedianFinder:
    def __init__(self):
        self.small = []  # max heap
        self.large = []  # min heap

    def addNum(self, num: int) -> None:
        if self.large and num > self.large[0]:
            heappush(self.large, num)
        else:
            heappush(self.small, -num)

        if len(self.large) > len(self.small) + 1:
            heappush(self.small, -heappop(self.large))
        if len(self.small) > len(self.large) + 1:
            heappush(self.large, -heappop(self.small))

    def findMedian(self) -> float:
        len_small = len(self.small)
        len_large = len(self.large)

        if len_large > len_small:
            return self.large[0]
        elif len_small > len_large:
            return -self.small[0]
        else:
            return (self.large[0] + -self.small[0]) / 2
