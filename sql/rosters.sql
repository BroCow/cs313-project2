

/*Show apprentices assigned to selected class*/
SELECT a.firstname, a.lastname
FROM apprentices a 
JOIN roster r 
ON r.apprentice_id=a.id 
JOIN classes c 
ON r.class_id=c.id 
WHERE c.classname='Fiber Optics';