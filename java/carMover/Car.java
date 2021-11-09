 
/**
 * @(#)Car.java
 *
 * draws a car
 * @author Kalea Gin 
 * @version 1.00 2021/11/5
 */
 
 
 
 
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.awt.geom.Ellipse2D;
import java.awt.geom.Line2D;
import java.awt.geom.Point2D;
 
public class Car
{
    private int xLeft;
    private int yTop;
    private Color carColor;
    private int scale;
    /**
     * constructs a car with a given coordinate
     * @param x xcoord of top left
     * @param y ycoord of top left
     */
    
    public Car(int x, int y, Color c, int s)
    {
        xLeft = x;
        yTop =y;
        carColor = c;
        scale = s;
    }
 
    /***
     * Draws the car
     * @param g2 the graphics context
     */
    public void draw(Graphics2D g2)
    {
        Rectangle body = new Rectangle(xLeft, yTop +10*scale, 60*scale, 10*scale);
        Ellipse2D.Double frontTire = new Ellipse2D.Double(xLeft+10*scale, yTop+20*scale, 10*scale, 10*scale);
        Ellipse2D.Double rearTire = new Ellipse2D.Double(xLeft+40*scale, yTop+20*scale, 10*scale, 10*scale);
 
        // bottom of front windshield
        Point2D.Double r1 = new Point2D.Double(xLeft+10*scale, yTop+10*scale);
        //front of roof
        Point2D.Double r2 = new Point2D.Double(xLeft+20*scale, yTop);
        //rear of roof
        Point2D.Double r3 = new Point2D.Double(xLeft+40*scale, yTop);
        //bottom of rear windshield
        Point2D.Double r4 = new Point2D.Double(xLeft+50*scale, yTop+10*scale);
 
        Line2D.Double frontWindshield = new Line2D.Double(r1, r2);
        Line2D.Double roofTop = new Line2D.Double(r2, r3);
        Line2D.Double rearWindshield = new Line2D.Double(r3, r4);
 
        g2.setColor(carColor);
        g2.draw(body);
        g2.draw(frontTire);
        g2.draw(rearTire);
        g2.draw(frontWindshield);
        g2.draw(roofTop);
        g2.draw(rearWindshield);
    }
}
 
