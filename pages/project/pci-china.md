---
title: "PCI-China"
---

The PCI-China series is a predictor of policy changes in China. A spike in the indicator signals a policy change, while a vertical bar marks the occurrence of a policy change labeled by the event.

**Figure: PCI-China and Major Policy Events in China, 1951 Q1 to 2024 Q3**

![graph](https://plot.ly/~weifeng.zhong/1.embed?showlink=false)

---

## Introduction

China's industrialization process has long been a product of government direction, be it coercive central planning or ambitious industrial policy. For the first time in the literature, we develop a quantitative indicator of China's policy priorities over a long period of time, which we call the Policy Change Index for China (PCI-China). The PCI-China is a leading indicator that covers the period from 1951 to the most recent quarter and can be updated in the future. In other words, the indicator not only helps us understand the past of China's industrialization but also allows us to make short-term predictions about its future directions.

The design of the PCI-China has two building blocks: (1) it takes as input data the full text of the *People's Daily* --- the official newspaper of the Communist Party of China --- since it was founded in 1946; (2) it employs a set of machine learning techniques to "read" the articles and detect changes in the way the newspaper prioritizes policy issues.

The source of the PCI-China's predictive power rests on the fact that the *People's Daily* is at the nerve center of China's propaganda system and that propaganda changes often precede policy changes. Before the great transformation from the central planning under Mao to the economic reform program after Mao, for example, considerable efforts were made by the Chinese government to promote the idea of reform, move public opinion, and mobilize resources toward the new agenda. Therefore, by detecting (real-time) changes in propaganda, the indicator is, effectively, predicting (future) changes in policy.

---

## Methodology

To detect changes in how the *People's Daily* prioritizes policy issues, the machine learning algorithm we design is geared toward carrying out a straightforward task: classifying whether a *People's Daily* article is published on the front page --- a proxy for high-priority content.

The intuition of the design can be explained with the following example. Imagine an avid reader of the *People's Daily* who had read, remembered, and thought through all the articles published in recent times (say, five years). They would, consequently, have acquired a fairly good sense of what kind of articles "should" or "should not" appear on the front page. But if the reader later picked up surprising papers, say, in the next quarter --- that is, their educated guess about the new paper turned out to work either particularly well or exceptionally poorly --- it might constitute a signal of change from the reader's perspective. While a small surprise may well be taken as noise, a strong signal would convince the reader that their existing understanding of the page arrangement is no longer valid and that the priorities of the *People's Daily* have fundamentally changed.

The design of the machine learning algorithm mimics the reasoning in the avid reader's mind and builds the PCI-China on the "surprises" to the algorithm's existing understanding of the newspaper. To train the algorithm on the text data and a variety of metadata variables associated with them, we apply a set of machine learning techniques, such as word embedding, multilayer perceptrons, and recurrent neural networks. Technical details can be found in Section 4 of our [research paper](pdf/Reading_China.pdf), "Reading China: Predicting Policy Change with Machine Learning."

We have also released the source code of the project on GitHub, which can be found [here](https://github.com/PSLmodels/PCI-China).

---

## Main Results

The above figure plots the quarterly PCI-China from 1951 to the most recent quarter. When the index hovers near zero, the (new) articles in the current quarter are largely confirming the "paradigm" the algorithm has acquired from the previous five years, suggesting policy stability. But if the index increases drastically, it would mean a big "surprise" to the algorithm's existing understanding, which, in turn, would indicate a major policy change in the near future.


The validity of the PCI-China, which we address in Section 5 of our [research paper](pdf/Reading_China.pdf), rests on whether it could have predicted important policy changes in China that have been identified in the literature --- or, the ground truth. These historical events are plotted in the same figure against the PCI-China time series for comparison. As shown in the figure, the indicator picks up the beginning of the Great Leap Forward in 1958, that of the Cultural Revolution in 1966, that of the economic reform program in 1978, and, more recently, a reform speed-up in 1993 and a reform slow-down in 2005, among others. The PCI-China often leads these events by months, providing short-term predictions of the latter's occurrences.

Furthermore, we show that, by reading articles mis-classified by the algorithm, one can infer from them the substance of policy changes that the PCI-China predicts would take place. In other words, the indicator allows us to not only predict the timing of policy changes but also understand the substance of these changes before they are realized.

---

## Potential Applications

The design of the PCI-China has an added feature: It is "language-free." That is, predicting the occurrences of policy change, in itself, does *not* require the researcher to read and process the Chinese text. The key ingredient of the algorithm is merely the page on which each article appears. This feature, therefore, suggests that the method could be applicable to a wide range of other settings, such as the possibility of predicting policy change in other (ex-)Communist regimes (e.g., Cuba and North Korea), measuring decentralization in central-local government relations (such as in China), measuring media bias in democracies (such as the US), and predicting changes in lawmakers' voting behavior and in judges' judicial or ideological leaning. Section 6 of our [research paper](pdf/Reading_China.pdf) discusses these potential applications in more detail.