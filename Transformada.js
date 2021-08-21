
function setup(){
  createCanvas(2000, 800);

}

function fourierTrans (senal){

  // Fk = Sum[n = 0 a N-1 ] ( fn *(cos(2*PI*n*K/N) -i*sen( cos(2*PI*n*K/N))  )
  // Fk --> a + bi
  // r = (a²+b²)^(1/2)
  //  an = artg(b/a)
  var frecuencias = [] ;
  var N = senal.length ;

  for(var k = 0 ; k < N ; k++ ){

    var a = 0 ;
    var b = 0 ;

    for (var n = 0 ; n < N; n++ ){

         var fn = senal[n] ;

         a += fn *( Math.cos(( 2*Math.PI*k*n)/N)) ;
         b -= fn *( Math.sin(( 2*Math.PI*k*n)/N)) ;
    }

    a = a/N ;
    b = b/N ;

    var r = Math.sqrt(a*a+b*b) ;
    var an = Math.atan2(b,a) ;
    var fr = k ;

    frecuencias.push([fr , r , an ,a ,b ]) ;

  }

  return frecuencias ;

}

function visualizacion ( xi , yi , frecuencias , t ,rotar){

    var x = xi ;
    var y = yi ;

    for( var i = 0 ; i < frecuencias.length; i++ ){

         var x_a = x ;
         var y_a = y ;

         var r = frecuencias[i][1] ;
         var fr = frecuencias[i][0] ;
         var anI = frecuencias[i][2] ;

         x += r * Math.cos( fr * t + anI + rotar ) ;
         y += r * Math.sin( fr * t + anI + rotar ) ;

         noFill()
         stroke(255)
         line(x_a,y_a,x,y) ;
         ellipse(x_a,y_a,r*2,r*2) ;


    }

    return [ x , y ]

}

var senalx = [283.63274,
226.32307000000003,
206.21906000000004,
143.61835000000005,
126.12256000000005,
86.87169600000004,
47.96040600000004,
37.374076000000045,
28.164856000000043,
19.462056000000043,
-3.631003999999958,
-2.9383739999999583,
23.846806000000043,
33.025226000000046,
41.920166000000044,
51.24955600000004,
126.51786000000004,
150.72542000000004,
205.18770000000004,
229.18770000000004,
322.98095,
415.36791,
441.1493,
498.32716999999997,
517.66338,
573.2125,
597.48893,
604.00501,
613.45858,
623.81112,
646.3457599999999,
645.7693399999999,
599.8862499999999,
586.4563899999999,
521.8199099999999,
513.8199099999999,
521.2914599999999,
538.15559,
545.50943,
565.2967799999999,
568.1555899999998,
574.8448299999999,
590.0326599999999,
596.2471899999998,
604.1555899999998,
606.6989599999998,
614.2009199999999,
616.7457499999999,
617.32094,
616.16942,
595.3880099999999,
585.3880099999999,
559.8418999999999,
547.16217,
530.85593,
518.85381,
494.36000999999993,
481.8806799999999,
476.2724399999999,
495.7732899999999,
519.7910899999999,
531.4783399999999,
548.8222599999999,
562.8222599999999,
586.8222599999999,
597.8582299999999,
617.8828299999999,
620.2737899999998,
621.4337499999998,
620.7013499999998,
617.9709099999998,
611.2956599999998,
607.3352299999998,
598.2693499999998,
593.4889299999998,
590.9346499999998,
573.6813099999998,
570.8222599999998,
561.0177899999998,
550.2986199999998,
542.3140099999998,
525.1941399999998,
519.2007299999998,
528.6781699999998,
576.1918599999998,
589.6507299999998,
602.1555899999998,
642.3657399999998,
650.8103399999999,
646.3455799999999,
625.25646,
615.9269099999999,
607.5463599999999,
599.60965,
562.51018,
522.79678,
491.28798,
436.82226,
422.15560000000005,
363.59093000000007,
322.3397800000001,
283.63274000000007,
283.63274,
298.44266,
241.62215999999998,
230.82226999999997,
321.60742999999997,
402.24870999999996,
411.36439999999993,
358.15559999999994,
326.82226999999995,
298.44265999999993,
298.44266,
352.82227,
400.68801,
413.42435,
378.57703,
267.07926,
237.54430999999997,
237.25978999999998,
303.48893999999996,
352.82226999999995,
352.82227,
452.1556,
425.48893,
452.46211999999997,
496.38185,
555.98057,
573.11267,
566.7985699999999,
488.8222599999999,
452.15559999999994,
452.1556,
492.82225999999997,
534.4320299999999,
567.0819799999999,
567.0236799999999,
549.4934699999999,
501.3281699999999,
453.0785299999999,
435.4953399999999,
492.8221699999999,
492.82225999999997,
157.63822999999996,
110.22419,
76.517916,
75.803706,
106.15561000000001,
127.37306000000001,
198.78561000000002,
215.89883000000003,
198.13741000000005,
157.63823000000005,
157.63822999999996,
195.11420999999996,
210.88884999999996,
213.09592999999995,
173.27030999999994,
96.00880599999994,
79.91903599999993,
76.90910599999994,
80.71985599999994,
131.01183999999995,
164.58538999999996,
195.11420999999996,
195.11420999999996,
304.25586,
230.78951999999998,
298.23296,
324.82227,
372.1556,
396.31367,
413.22008,
421.19366,
416.37327000000005,
390.15560000000005,
348.55905000000007,
304.2558600000001,
304.25586,
354.1556,
393.64977,
418.48503999999997,
404.82018999999997,
349.42629,
294.82227,
257.48894,
235.16119,
231.68596,
235.12532,
303.56988,
354.1556,
354.1556,
56.750396,
27.314986,
27.204436,
57.317326,
79.858086,
99.092131,
66.221026,
56.750395999999995,
56.750396,
70.621166,
96.518441,
83.692146,
73.14538599999999,
40.39456599999999,
50.23845599999999,
60.832525999999994,
70.62116599999999,
70.621166,
576.0937,
547.19586,
560.54506,
583.3080100000001,
619.6642300000001,
619.0341500000001,
598.1306900000001,
576.0937000000001,
576.0937,
595.76346,
608.61571,
565.68061,
562.19909,
571.1171899999999,
586.6366899999999,
595.7634599999999,
595.76346,
184.43378,
126.00788000000001,
127.49255000000001,
149.94394,
235.48894,
306.04344000000003,
226.15561000000002,
184.43378,
184.43378,
214.01954,
303.60135,
254.67746000000002,
218.95518000000004,
145.70069000000004,
135.78619000000003,
168.15561000000002,
194.15561000000002,
214.01954000000003,
214.01954,
426.1556,
360.34571,
399.75985000000003,
443.30718,
521.30233,
468.75253,
426.1556,
426.1556,
464.4233,
520.97357,
517.91845,
440.94232,
347.4202,
347.47740000000005,
364.27811,
390.82509000000005,
425.84653000000003,
464.42333,
464.4233,
-3.644614,
16.542226,
46.775746,
56.098085999999995,
114.06448,
126.56459000000001,
120.09102000000001,
104.04058000000002,
95.83289600000002,
76.15615600000002,
68.08383600000002,
53.31091600000002,
47.38025600000002,
38.822276000000016,
34.204526000000016,
28.479696000000015,
26.764396000000016,
25.974136000000016,
26.001436000000016,
26.962836000000017,
47.992446000000015,
60.304636000000016,
86.28886600000001,
95.57477600000001,
114.41276000000002,
125.85348000000002,
149.78518000000003,
169.19996000000003,
163.98574000000002,
152.87316,
128.35288000000003,
114.12184000000002,
101.52390000000003,
86.75439600000003,
68.74985600000002,
59.76299600000002,
51.12542600000002,
31.65015600000002,
28.60876600000002,
30.17556600000002,
28.279226000000023,
29.40361600000002,
32.18985600000002,
34.20350600000002,
38.89292600000002,
42.51533600000002,
52.81979600000002,
56.15564600000002,
70.66293600000002,
79.26661600000001,
97.57332100000002,
106.81048000000003,
123.04381000000002,
131.80005000000003,
120.58911000000003,
98.51562100000004,
60.01268600000004,
44.15564600000004,
-2.9456239999999596,
-3.6445739999999596,
-3.644614,
540.82226,
424.48893000000004,
446.15560000000005,
477.91377000000006,
537.8832500000001,
556.8178300000001,
558.8410900000001,
540.8222600000001,
540.82226,
556.71891,
460.11176000000006,
425.8451800000001,
452.13326000000006,
554.1555900000001,
556.71891,
556.71891,
91.088946,
92.12424600000001,
166.93998000000002,
199.48894,
228.15561000000002,
125.26075000000003,
91.08894600000002,
91.088946,
111.36156000000001,
224.02058,
199.48893999999999,
145.49235,
121.49235999999999,
96.85535099999998,
92.58787599999998,
111.36155999999998,
111.36156000000001,
306.1556,
240.64031,
294.1556,
344.55559999999997,
409.57748999999995,
410.37308999999993,
362.71500999999995,
306.15559999999994,
306.1556,
342.65758999999997,
402.06962999999996,
408.75771999999995,
396.3701899999999,
372.15559999999994,
324.15559999999994,
278.15559999999994,
240.46717999999993,
310.4053599999999,
342.6575899999999,
342.65758999999997,
158.82226999999997,
162.83794999999998,
166.16940999999997,
153.15373999999997,
125.78880999999997,
130.39725999999996,
135.39192999999997,
121.44043999999997,
97.72887099999997,
103.39117999999996,
109.48290999999996,
98.48291099999996,
76.15560599999996,
82.41176599999996,
88.66792599999995,
82.74510599999995,
61.48894599999995,
67.48894599999994,
73.48894599999994,
62.15560599999994,
58.822275999999945,
66.82227599999995,
58.935055999999946,
45.990185999999944,
54.187175999999944,
61.62359599999994,
58.93651599999994,
51.53586599999994,
46.822275999999945,
65.07173599999994,
83.32118599999994,
79.73839599999994,
89.93132599999994,
109.13814999999994,
119.71367999999994,
116.13372999999994,
112.89153999999995,
140.52758999999995,
147.81750999999994,
144.39780999999994,
143.58717999999993,
171.64630999999994,
176.15560999999994,
175.53325999999993,
198.59350999999992,
207.38589999999994,
208.13150999999993,
226.70980999999995,
233.70979999999994,
234.82226999999995,
237.07742999999994,
251.72178999999994,
264.1109799999999,
264.9895399999999,
276.6252799999999,
306.3748599999999,
286.9456399999999,
270.37999999999994,
163.07041999999996,
145.77000999999996,
164.85518999999996,
256.10495999999995,
261.31258999999994,
189.00428999999994,
158.82226999999995,
158.82226999999997,
208.12318,
260.94506,
263.19428,
256.00828,
128.15561,
119.97314999999999,
119.97314999999999,
144.15561,
236.36032,
264.36032,
281.97475,
300.48888,
302.882,
278.7445,
269.59399,
267.69306,
250.14703,
238.3639,
233.24927,
227.45306,
216.99183,
210.82227,
210.77987000000002,
205.7459,
195.47946000000002,
179.82227,
179.28318000000002,
170.6399,
147.8501,
149.39217,
150.20519,
141.87186,
127.16423999999999,
118.83954,
120.83091,
121.08381,
108.08381,
82.265736,
84.18704600000001,
86.82227600000002,
68.75822600000001,
50.69416600000001,
54.96531600000001,
64.155606,
56.488946000000006,
48.822276,
59.929146,
62.611196,
55.117986,
58.994196,
70.84633600000001,
70.54996600000001,
68.25927600000001,
81.78611600000002,
93.08807600000002,
86.86611600000002,
81.10553600000001,
86.41775600000001,
103.27613000000001,
114.82228,
109.87384,
104.92541,
108.20717,
124.15561000000001,
138.15561000000002,
135.74410000000003,
131.99928000000003,
135.36634000000004,
152.79035000000005,
168.60983000000004,
166.39741000000004,
181.60983000000004,
208.12318000000005,
208.12318,
457.48893,
386.99861,
389.82227,
483.45601,
502.5412,
450.1556,
380.63320999999996,
369.89424999999994,
350.48268999999993,
364.17179999999996,
383.32167,
384.20023,
396.58941,
411.23377,
413.48893,
414.60139999999996,
421.60139999999996,
440.58705,
441.03493999999995,
449.78502,
472.77794,
472.1556,
476.66489,
504.72402,
503.9134,
500.49369,
507.78361,
535.3538100000001,
532.10382,
539.8791,
557.90567,
568.57281,
564.99002,
583.23947,
601.48893,
596.77534,
589.3739,
586.6860300000001,
594.1632900000001,
602.36107,
589.40534,
582.31289,
590.2836900000001,
586.1555900000001,
574.82226,
580.82226,
586.82217,
564.89943,
559.64327,
565.89943,
572.1555900000001,
549.1555900000001,
538.82226,
544.92002,
550.58234,
526.87077,
512.91927,
517.91394,
522.52239,
495.15745999999996,
482.14179999999993,
485.47324999999995,
478.4889299999999,
457.4889299999999,
457.48893,
479.56453,
495.52085,
512.94486,
516.31193,
512.5671,
510.1556,
524.15559,
540.10403,
543.3857899999999,
538.4373699999999,
533.4889299999999,
541.8031699999999,
558.7340599999999,
567.3506899999999,
561.5175899999999,
555.22313,
566.52509,
580.05193,
577.76123,
577.4648599999999,
589.35466,
593.2685299999999,
588.7156699999999,
577.48893,
588.48893,
599.48893,
591.82226,
584.1555900000001,
593.34589,
597.61703,
579.55298,
561.4889300000001,
564.1555900000001,
566.82226,
540.22739,
527.22739,
527.4803,
529.47166,
521.14697,
506.43934,
498.10601,
498.91904000000005,
500.46110000000004,
477.67130000000003,
469.02802,
468.48893000000004,
451.82048000000003,
443.02712,
437.74912,
438.32741,
430.65292,
420.14288999999997,
415.43238999999994,
409.94730999999996,
398.16416999999996,
380.61814999999996,
378.71720999999997,
369.56670999999994,
345.4291999999999,
347.82231999999993,
366.33644999999996,
383.48893,
456.82225999999997,
526.8222599999999,
528.3380599999999,
528.2168599999999,
520.0343899999999,
392.3029699999999,
385.1169699999999,
387.36619999999994,
426.4955799999999,
469.8979199999999,
481.6401999999999,
479.56457999999986,
479.56453,
320.5941,
278.94984,
266.54272,
257.38802,
248.22789999999998,
233.18357999999998,
217.43284999999997,
200.47716999999997,
182.82226999999997,
175.48893999999999,
182.82226999999997,
202.15560999999997,
220.15560999999997,
232.25135999999998,
256.65662,
267.20651999999995,
317.56910999999997,
324.1556,
341.61991,
370.32468,
378.39175,
387.71117,
413.19653,
428.73941,
444.37422000000004,
455.12374000000005,
464.15560000000005,
468.15560000000005,
459.87532000000004,
444.32750000000004,
428.77318,
413.94484,
391.55167,
380.01712,
365.43784,
349.10532,
326.58299,
320.59409999999997,
320.5941,
]
var senaly = [834.66054,
802.23878,
789.49431,
754.31055,
744.0389700000001,
716.70459,
651.15961,
615.46909,
585.08005,
569.08005,
511.56889,
505.46909,
568.4535,
588.51202,
617.46909,
648.6401400000001,
739.8548800000001,
754.5040400000001,
784.9183600000001,
799.4058600000001,
836.1257,
800.64346,
784.88654,
752.62893,
741.0047999999999,
695.4690899999999,
638.27356,
617.4227,
587.66694,
566.3336099999999,
521.4690899999999,
462.42404999999997,
392.59515999999996,
362.80242,
255.08751999999998,
248.37142999999998,
244.19696999999996,
231.08570999999998,
224.18788999999998,
209.19932999999997,
201.99938999999998,
195.71096999999997,
174.60399999999998,
163.21527999999998,
144.25558999999998,
135.58066,
113.97331,
102.38656999999999,
81.13979099999999,
70.92876799999999,
42.831689999999995,
39.287960999999996,
30.144273999999996,
27.852998999999997,
22.802405999999998,
19.948234999999997,
17.397112999999997,
16.485633999999997,
13.948727999999997,
13.710509999999998,
16.137347999999996,
18.802405999999998,
24.075989999999997,
27.086032999999997,
35.452473999999995,
39.207634999999996,
48.316759999999995,
69.802098,
80.750998,
102.80241,
114.51236,
135.84097,
147.55321,
166.73064,
175.11708,
183.91546,
201.36612,
204.90243999999998,
220.74366999999998,
226.29327999999998,
232.62894999999997,
246.83652999999998,
248.60617,
254.80441,
306.13575,
358.13575,
389.46369999999996,
441.78005999999993,
493.66153999999995,
532.3849899999999,
570.9375699999999,
592.1162999999999,
618.6316599999999,
645.4512399999999,
713.9096699999999,
742.7484799999999,
761.7034299999999,
790.8352699999999,
800.1204799999999,
834.06882,
837.37439,
834.66054,
834.66054,
810.79783,
778.16981,
759.02513,
723.24468,
736.52976,
772.6001200000001,
808.0002400000001,
813.03506,
810.7978300000001,
810.79783,
806.79048,
778.87279,
747.68981,
731.52145,
735.5383899999999,
751.6097299999999,
768.2263699999999,
808.9301799999998,
806.7904799999999,
806.79048,
730.37465,
691.98092,
613.84276,
570.40036,
561.1560499999999,
611.7875999999999,
657.7292499999999,
728.8056899999999,
730.3746499999999,
730.37465,
723.91111,
698.3665100000001,
647.2148500000001,
588.8959600000001,
561.13576,
571.05345,
618.38802,
718.567,
723.91111,
723.91111,
726.82596,
700.0014,
642.80242,
590.49716,
568.4248,
571.38525,
630.70281,
693.86941,
726.26261,
726.82596,
726.82596,
724.14324,
708.41376,
686.8024300000001,
604.71144,
572.85422,
588.62585,
615.46909,
646.8024200000001,
712.0307200000001,
725.4218700000001,
724.1432400000001,
724.14324,
697.35275,
631.34108,
525.31775,
522.42227,
533.17593,
550.78504,
573.51905,
615.79316,
640.80242,
676.5914799999999,
696.6703899999999,
697.3527499999999,
697.35275,
692.14627,
668.20168,
606.80242,
565.48906,
527.96082,
529.4479,
551.67266,
585.68962,
610.13576,
635.18066,
694.02039,
692.1462700000001,
692.14627,
565.52426,
518.80242,
465.46909,
416.63999,
402.80242,
468.46173999999996,
564.68201,
565.52426,
565.52426,
556.71445,
452.13575000000003,
407.0581,
409.05704000000003,
441.71439000000004,
555.94628,
562.80242,
556.7144499999999,
556.71445,
559.2545600000001,
456.8022200000001,
402.3630600000001,
409.6991900000001,
464.8024200000001,
516.3691000000001,
555.7171800000001,
559.2545600000001,
559.2545600000001,
554.0243600000001,
444.4720500000001,
404.1357500000001,
526.7470600000001,
548.0910600000002,
561.4690900000002,
554.0243600000001,
554.0243600000001,
540.85815,
480.33123,
432.80242,
390.13575,
349.89966,
453.19196999999997,
539.49875,
540.85815,
540.85815,
538.7535,
449.68513,
356.98266,
353.42527,
401.36714,
498.80242,
531.6741,
539.3013,
538.7534999999999,
538.7535,
535.49077,
487.37047,
347.45454,
348.08927,
424.50094,
535.43123,
535.49073,
535.49077,
533.33979,
476.13575,
424.00789999999995,
350.79463,
405.46907999999996,
450.13575,
487.70014999999995,
515.4694099999999,
532.12871,
533.33979,
533.33979,
473.95411,
418.13575000000003,
387.48386000000005,
359.99591000000004,
257.16983000000005,
248.67015000000004,
246.37093000000004,
232.98636000000005,
226.27925000000005,
208.13739000000004,
198.21147000000005,
178.11160000000004,
166.80241000000004,
147.66928000000004,
134.87510000000003,
113.81067000000003,
105.45685000000003,
78.15844500000003,
70.36534000000003,
51.17878000000003,
39.140285000000034,
34.51250200000003,
26.802406000000033,
25.330237000000032,
18.831689000000033,
16.13734800000003,
13.709458000000032,
13.946625000000031,
16.52641100000003,
17.620968000000033,
19.485133000000033,
22.802406000000033,
26.310959000000032,
30.15475600000003,
34.11278800000003,
40.26899300000003,
42.80240800000003,
50.85401300000003,
62.03531300000003,
72.94662800000003,
82.56017800000004,
101.97347000000003,
113.34979000000004,
128.31181000000004,
134.80241000000004,
146.50434000000004,
166.25670000000005,
173.17194000000006,
195.34644000000006,
205.35729000000006,
222.94020000000006,
230.09991000000005,
243.44487000000004,
248.31751000000003,
257.46908,
274.69767,
359.46908,
394.40259000000003,
480.80242000000004,
473.95411,
473.95411,
376.30692,
275.73635,
261.76193,
263.92069,
299.50138999999996,
336.80242,
378.11305999999996,
376.30691999999993,
376.30692,
362.80242,
264.55347,
267.79721,
302.87816,
377.09879,
362.80242,
362.80242,
375.86908,
340.13575,
262.57223999999997,
259.57937,
265.50228999999996,
364.63051999999993,
375.86907999999994,
375.86908,
368.98015,
269.16004999999996,
262.35067,
274.34436,
292.02423,
334.13575,
372.67238,
368.98015,
368.98015,
344.04179,
283.65929,
246.80183,
244.61879,
285.47239,
313.20666,
341.54688,
344.04179,
344.04179,
341.37243,
318.6164,
292.38304,
274.70288,
257.80084,
246.21264,
256.78372,
294.6956,
341.34742,
341.37252,
341.37243,
242.22653000000003,
237.45792000000003,
233.49141000000003,
231.44217000000003,
224.04147000000003,
220.22991000000002,
218.42381000000003,
213.61077000000003,
201.06356000000002,
198.80241000000004,
197.80241000000004,
191.18775000000005,
174.76012000000006,
171.87546000000006,
171.46908000000005,
167.56977000000006,
147.93278000000007,
146.80241000000007,
145.93856000000005,
133.31816000000006,
118.13574000000006,
117.79995000000005,
109.67557000000005,
91.41937800000005,
90.31137800000005,
91.18538800000005,
84.11358100000004,
69.94260400000005,
61.48958700000004,
60.135741000000046,
60.135741000000046,
56.39611600000005,
48.11865200000005,
50.35832800000005,
51.68877700000005,
46.11317200000005,
40.216095000000045,
44.925961000000044,
46.25161300000004,
41.05229000000004,
33.469073000000044,
42.90255800000004,
38.43857900000004,
32.13574000000004,
44.52747700000004,
41.13574100000004,
36.13574100000004,
49.958168000000036,
55.33257100000004,
48.723718000000034,
42.802408000000035,
55.747324000000035,
68.69223900000003,
64.29939300000002,
65.56899800000002,
120.59276000000003,
172.34410000000003,
171.64565000000002,
109.71112000000002,
102.80241000000002,
114.26621000000003,
178.27305,
203.15175000000002,
242.71476,
242.22653000000003,
242.22653000000003,
236.17260000000002,
196.21768000000003,
190.59629000000004,
183.26734000000005,
98.115078,
92.436448,
90.553668,
98.356058,
143.61963,
162.84948,
171.20141,
152.86234000000002,
119.93111000000002,
73.46907500000002,
63.08365900000002,
66.78179500000002,
59.317565000000016,
48.97999400000002,
60.13574100000002,
55.13574100000002,
45.719560000000016,
41.303379000000014,
45.05289300000001,
53.46907400000001,
46.79523000000001,
37.58341100000001,
49.06586200000001,
46.29357800000001,
37.46907400000001,
40.982219000000015,
50.301212000000014,
48.959713000000015,
44.95635200000002,
43.04293400000002,
45.88601300000002,
55.55321300000002,
53.52070800000002,
51.95754500000002,
55.497529000000014,
60.34239200000002,
62.80240800000002,
62.80240800000002,
69.01031100000002,
90.75016800000002,
93.73586800000001,
94.13573800000002,
105.08846000000001,
120.80241000000001,
120.80241000000001,
125.69133000000001,
137.48992,
149.46908000000002,
151.59398000000002,
162.50322000000003,
172.67169,
175.4584,
176.86098,
180.37645,
190.1348,
197.65809000000002,
201.00607000000002,
203.07367000000002,
204.88856,
210.91883,
216.39439000000002,
220.89845000000003,
224.14231000000004,
225.42247000000003,
228.13249000000002,
237.36776000000003,
240.52645000000004,
239.75299000000004,
236.17260000000005,
236.17260000000002,
242.63617000000002,
203.15175000000002,
180.61557000000002,
114.25040000000001,
102.80241000000001,
126.15110000000001,
169.72578000000001,
176.13574000000003,
162.82316000000003,
74.80240800000003,
64.29939300000002,
68.69223900000003,
55.74732400000003,
42.80240800000003,
48.72371800000003,
55.33257100000003,
49.91215200000003,
36.135741000000024,
41.135741000000024,
44.53252400000002,
32.13574000000003,
38.438579000000026,
42.90255800000003,
33.46907300000003,
41.05229000000003,
46.25161300000003,
44.92596100000003,
40.15024300000003,
46.39841700000003,
50.20738800000003,
48.13574100000003,
56.396116000000035,
60.13574100000004,
60.13574100000004,
61.489587000000036,
69.94260400000003,
84.11565900000004,
91.18954800000003,
90.41781800000003,
91.52373800000002,
109.65017000000003,
117.72358000000003,
118.06205000000003,
133.31816000000003,
145.93856000000002,
146.80241000000004,
148.46908000000005,
167.99846000000005,
171.46908000000005,
171.87546000000006,
174.76190000000005,
191.61768000000006,
197.76147000000006,
198.80241000000007,
201.06356000000005,
213.61077000000006,
218.42381000000006,
220.22991000000005,
224.04147000000006,
231.44217000000006,
233.49141000000006,
237.45792000000006,
243.96276000000006,
242.63617000000005,
242.63617000000002,
237.1724,
228.13249000000002,
225.42247000000003,
224.14231000000004,
220.89845000000003,
216.39439000000002,
210.91883,
204.88856,
203.07367000000002,
201.00607000000002,
197.55631000000002,
191.97712,
182.3382,
176.8963,
175.47606,
172.67168999999998,
162.50322,
151.59398,
149.46908,
137.48991999999998,
125.63858999999998,
120.69693999999998,
121.22845999999998,
117.91003999999998,
104.95291999999998,
94.17068799999998,
93.75334799999999,
90.75016799999999,
69.01031099999999,
62.802407999999986,
62.802407999999986,
60.34239199999998,
55.46907499999998,
51.92908999999998,
53.52070799999998,
55.55321299999998,
45.88601299999998,
43.042933999999974,
44.956351999999974,
48.95971299999997,
50.30121199999997,
40.98221899999997,
37.46907399999997,
46.29357799999997,
49.06586199999997,
37.52236099999997,
47.65889999999997,
53.469073999999964,
44.30079999999997,
40.360666999999964,
46.26604799999996,
56.15358399999997,
60.13574099999997,
48.97999399999997,
59.31756499999997,
66.78179499999997,
63.083656999999974,
73.46907499999998,
119.93110999999998,
152.86233999999996,
171.20276999999996,
163.18369999999996,
119.43705999999996,
90.28948799999996,
90.30948799999996,
92.17360799999996,
98.19609799999996,
183.25878999999998,
190.59632999999997,
196.21770999999995,
232.02700999999996,
240.04111999999995,
240.13581999999994,
237.17247999999995,
237.1724,
107.13574,
44.896052999999995,
40.135740999999996,
36.614535,
29.281200999999996,
25.469072999999995,
22.107313999999995,
19.070312999999995,
16.400463999999996,
13.405856999999996,
14.158890999999995,
15.190498999999996,
18.906221999999996,
21.790858999999998,
30.883001,
36.754146,
89.537498,
100.26555,
66.071752,
38.144871,
36.742534,
32.073234,
21.586945,
18.121695,
15.653948999999999,
15.246944,
13.621583999999999,
14.345628999999999,
17.58794,
19.302893,
21.95532,
25.469073,
34.647228,
40.135740999999996,
46.386475999999995,
62.719809,
104.40859,
107.13574,
107.13574,
]
var a = 0.5 ;

for(var i = 0 ; i < senalx.length ; i++ ){
    senalx[i] = senalx[i]*a + 100 ;
    senaly[i] = senaly[i]*a - 30 ;

}

var frecuanciasx = fourierTrans(senalx);
var frecuanciasy = fourierTrans(senaly);

var t = 0 ;
var inT = 2*Math.PI/senalx.length ;

var path = [];

function draw(){

  background(0);

  var y = visualizacion( width / 2 + 100 ,  100  , frecuanciasy , t , Math.PI/2 ) ;
  var x = visualizacion( 100, height / 2 + 100 , frecuanciasx , t , 0 ) ;

  let v = createVector(x[0], y[1]);
  path.unshift(v);
  line(x[0], x[1], v.x, v.y);
  line(y[0], y[1], v.x, v.y);


  beginShape();
  stroke(255);
  noFill();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

   t += inT ;



}
